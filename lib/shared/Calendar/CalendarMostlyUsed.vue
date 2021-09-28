<template>
  <div class="CalendarMostlyUsed">
    <header>
      زمان‌های پر استفاده
    </header>
    <ul class="CalendarMostlyUsed__list">
      <li class="CalendarMostlyUsed__list-item">
        امروز
      </li>
      <li class="CalendarMostlyUsed__list-item CalendarMostlyUsed__list-item--active">
        ۷ روز اخیر۷ روز اخیر۷ روز اخیر۷ روز اخیر۷ روز اخیر۷ روز اخیر۷ روز اخیر
      </li>
      <li class="CalendarMostlyUsed__list-item">
        ۷ روز اخیر
      </li>
      <li class="CalendarMostlyUsed__list-item">
        ۷ روز اخیر
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  @import './shared/styles/vars.scss';
  .CalendarMostlyUsed {
    font-size: $cl-mostly-used-font-size;
    display: flex;
    flex-direction: column;

    padding-left: 16px;
    box-sizing: border-box;

    overflow: hidden;

    &__list {
      list-style-type: none;
      padding: 0;
      margin-bottom: 0;
      margin-top: 12px;
      flex: 1;
      flex-basis: 0;

      overflow-y: auto;

      &-item {
        cursor: pointer;
        transition: $cl-mostly-used-transition-duration;

        user-select: none;

        color: $cl-text-color;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        &:not(:first-child) {
          margin-top: 8px;
        }

        &:hover {
          color: $cl-mostly-used-active-color;
        }

        &--active {
          color: $cl-mostly-used-active-color;
        }
      }
    }
  }
</style>
