/* eslint-disable */
/**
 * Credits to https://github.com/farhadi/JalaliJSCalendar
 */

import { TupleDate } from "../types";

const JalaliDate = {
  g_days_in_month: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  j_days_in_month: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29],
};

export function toGregorian(j_y: any, j_m: any, j_d: any) {
  j_y = parseInt(j_y);
  j_m = parseInt(j_m) + 1;
  j_d = parseInt(j_d);
  const jy = j_y - 979;
  const jm = j_m - 1;
  const jd = j_d - 1;

  let j_day_no = 365 * jy + parseInt(String(jy / 33)) * 8 + parseInt(String((jy % 33 + 3) / 4));
  for (var i = 0; i < jm; ++i) j_day_no += JalaliDate.j_days_in_month[i];

  j_day_no += jd;

  let g_day_no = j_day_no + 79;

  let gy = 1600 + 400 * parseInt(String(g_day_no / 146097)); /* 146097 = 365*400 + 400/4 - 400/100 + 400/400 */
  g_day_no %= 146097;

  let leap = true;
  if (g_day_no >= 36525) /* 36525 = 365*100 + 100/4 */
  {
    g_day_no--;
    gy += 100 * parseInt(String(g_day_no / 36524)); /* 36524 = 365*100 + 100/4 - 100/100 */
    g_day_no %= 36524;

    if (g_day_no >= 365) { g_day_no++; } else { leap = false; }
  }

  gy += 4 * parseInt(String(g_day_no / 1461)); /* 1461 = 365*4 + 4/4 */
  g_day_no %= 1461;

  if (g_day_no >= 366) {
    leap = false;

    g_day_no--;
    gy += parseInt(String(g_day_no / 365));
    g_day_no %= 365;
  }

  for (var i = 0; g_day_no >= JalaliDate.g_days_in_month[i] + Number((i == 1 && leap)); i++) { g_day_no -= JalaliDate.g_days_in_month[i] + Number((i == 1 && leap)); }
  const gm = i + 1;
  const gd = g_day_no + 1;

  return [gy, gm - 1, gd] as TupleDate;
}

export function toJalali(g_y: string | number, g_m: string | number, g_d: string | number) {
  g_y = parseInt(String(g_y));
  g_m = parseInt(String(g_m)) + 1;
  g_d = parseInt(String(g_d));
  const gy = g_y - 1600;
  const gm = g_m - 1;
  const gd = g_d - 1;

  let g_day_no = 365 * gy + parseInt(String((gy + 3) / 4)) - parseInt(String((gy + 99) / 100)) + parseInt(String((gy + 399) / 400));

  for (var i = 0; i < gm; ++i) { g_day_no += JalaliDate.g_days_in_month[i]; }
  if (gm > 1 && ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0)))
  /* leap and after Feb */
  { ++g_day_no; }
  g_day_no += gd;

  let j_day_no = g_day_no - 79;

  const j_np = parseInt(String(j_day_no / 12053));
  j_day_no %= 12053;

  let jy = 979 + 33 * j_np + 4 * parseInt(String(j_day_no / 1461));

  j_day_no %= 1461;

  if (j_day_no >= 366) {
    jy += parseInt(String((j_day_no - 1) / 365));
    j_day_no = (j_day_no - 1) % 365;
  }

  for (var i = 0; i < 11 && j_day_no >= JalaliDate.j_days_in_month[i]; ++i) {
    j_day_no -= JalaliDate.j_days_in_month[i];
  }
  const jm = i + 1;
  const jd = j_day_no + 1;

  return [jy, jm - 1, jd] as TupleDate;
}
