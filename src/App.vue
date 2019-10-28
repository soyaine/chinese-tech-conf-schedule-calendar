<template>
  <div class='demo-app'>
    <FullCalendar
      class='demo-app-calendar'
      ref="fullCalendar"
      defaultView="dayGridMonth"
      :header="{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth, listMonth'
      }"
      :buttonText="{
        listMonth: '📄️ 列表视图',
        month: '📅️ 日历视图'
      }"
      :plugins="calendarPlugins"
      :weekends="calendarWeekends"
      :events="calendarEvents"
      />
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data: function() {
    return {
      calendarPlugins: [ // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin, // needed for dateClick
        listPlugin
      ],
      calendarWeekends: true,
      calendarEvents: [ // initial event data
        { title: 'QCon 全球软件开发大会 2019 上海站', start: '2019-10-17', end: '2019-10-20', url: 'https://qcon.infoq.cn/2019/shanghai/' },
        { title: 'JavaScript 中国开发者大会 2019', start: '2019-10-19', end: '2019-10-21', url: 'https://2019.jsconfchina.com', backgroundColor: 'green' },
        { title: '2019携程技术峰会', start: '2019-11-09', end: '2019-11-10', url: 'https://techsummit.ctrip.com', backgroundColor: 'green' },
        { title: 'TOP100全球软件案例研究峰会 2019', start: '2019-11-14', end: '2019-11-19', url: 'https://www.top100summit.com', backgroundColor: 'green' },
        { title: 'TWeb 腾讯前端技术大会 2019', start: '2019-11-16', end: '2019-11-17', url: 'https://tweb.tencent.com', backgroundColor: 'green' }
      ],

    }
  },
  methods: {
    toggleWeekends() {
      this.calendarWeekends = !this.calendarWeekends // update a property
    },
    gotoPast() {
      let calendarApi = this.$refs.fullCalendar.getApi() // from the ref="..."
      calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
    },
    handleDateClick(arg) {
      if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
        this.calendarEvents.push({ // add new event data
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay
        })
      }
    }
  }
}

</script>

<style lang='scss'>

// you must include each plugins' css
// paths prefixed with ~ signify node_modules
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
@import '~@fullcalendar/timegrid/main.css';
@import '~@fullcalendar/list/main.css';

.demo-app {
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 16px;
}

.demo-app-calendar {
  margin: 6em auto;
  max-width: 900px;
}

</style>
