import React, { Component } from "react";
import $ from "jquery";
import "fullcalendar";
import "fullcalendar-scheduler";
import "fullcalendar/dist/fullcalendar.css";
import moment from "moment";

class FullCalendar extends Component {
  render() {
    return <div id="calendar" />;
  }
  componentDidMount() {
    $("#calendar").fullCalendar({
      schedulerLicenseKey: "CC-Attribution-NonCommercial-NoDerivatives",
      header: {
        left: "prev,next today",
        center: "title",
        right: "month,agendaWeek,agendaDay"
        // center: "Time Sheet",
        // right: "agendaWeek"
      },
      events: [],
      resources: {},
      editable: true,
      droppable: true, // this allows things to be dropped onto the calendar
      drop: function() {
        // is the "remove after drop" checkbox checked?
        if ($("#drop-remove").is(":checked")) {
          // if so, remove the element from the "Draggable Events" list
          $(this).remove();
        }
      },
      updateEvents: function(eventsList) {
        $("#calendar").fullCalendar("destroy");
        $("#calendar").fullCalendar({
          theme: false,
          timezone: "local",
          defaultView: "agendaWeek",
          header: { center: "Time Sheet", right: "agendaWeek" },
          navLinks: false,
          editable: false,
          eventLimit: true,
          allDaySlot: false,
          scrollTime: "09:00:00",
          minTime: "09:00:00",
          maxTime: "18:00:00",
          defaultdate: moment().format(),
          events: eventsList,
          contentHeight: "auto"
        });
      },
      componentDidMount: function(x) {
        this.updateEvents(x); //you can pass the eventsList as a prop
      },
      componentDidUpdate: function(x) {
        this.updateEvents(x); //you can pass eventsList as a prop
      }
    });
  }
}

export default FullCalendar;
