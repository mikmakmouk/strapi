import type { Schema, Struct } from '@strapi/strapi';

export interface ScheduleSchedule extends Struct.ComponentSchema {
  collectionName: 'components_schedule_schedules';
  info: {
    description: '';
    displayName: 'schedule';
    icon: 'bulletList';
  };
  attributes: {
    days: Schema.Attribute.Enumeration<
      ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Monday'>;
    description: Schema.Attribute.String;
    from: Schema.Attribute.Time;
    to: Schema.Attribute.Time;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'schedule.schedule': ScheduleSchedule;
    }
  }
}
