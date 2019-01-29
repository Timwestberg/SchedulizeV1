import React, { Component } from "react";
import { PropTypes } from "prop-types";
import moment from "moment";
//import 'moment/locale/zh-cn';
import "react-big-scheduler/lib/css/style.css";
import Scheduler, {
  SchedulerData,
  ViewTypes,
  DATE_FORMAT
  // 
  // Tips,
  // ViewSrcCode,
  // withDragDropContext
} from "react-big-scheduler";

let schedulerData = new SchedulerData(
  new moment().format(DATE_FORMAT),
  ViewTypes.Week
);
//set locale moment to the schedulerData, if your locale isn't English. By default, Scheduler comes with English(en, United States).
moment.locale("zh-cn");
schedulerData.setLocaleMoment(moment);

let resources = [
  {
    id: "r1",
    name: "Resource1"
  },
  {
    id: "r2",
    name: "Resource2"
  },
  {
    id: "r3",
    name: "Resource3"
  }
];
schedulerData.setResources(resources);
//set events here or later,
//the event array should be sorted in ascending order by event.start property, otherwise there will be some rendering errors
let events = [
  {
    id: 1,
    start: "2017-12-18 09:30:00",
    end: "2017-12-19 23:30:00",
    resourceId: "r1",
    title: "I am finished",
    bgColor: "#D9D9D9"
  },
  {
    id: 2,
    start: "2017-12-18 12:30:00",
    end: "2017-12-26 23:30:00",
    resourceId: "r2",
    title: "I am not resizable",
    resizable: false
  },
  {
    id: 3,
    start: "2017-12-19 12:30:00",
    end: "2017-12-20 23:30:00",
    resourceId: "r3",
    title: "I am not movable",
    movable: false
  },
  {
    id: 4,
    start: "2017-12-19 14:30:00",
    end: "2017-12-20 23:30:00",
    resourceId: "r1",
    title: "I am not start-resizable",
    startResizable: false
  },
  {
    id: 5,
    start: "2017-12-19 15:30:00",
    end: "2017-12-20 23:30:00",
    resourceId: "r2",
    title: "R2 has recurring tasks every week on Tuesday, Friday",
    rrule: "FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR",
    bgColor: "#f759ab"
  }
];
schedulerData.setEvents(events);

class Schedule extends Component {
  constructor(props) {
    super(props);

    //let schedulerData = new SchedulerData(new moment("2017-12-18").format(DATE_FORMAT), ViewTypes.Week);
    let schedulerData = new SchedulerData("2017-12-18", ViewTypes.Week);
    schedulerData.localeMoment.locale("en");
    schedulerData.setResources(resources);
    schedulerData.setEvents(events);
    this.state = {
      viewModel: schedulerData
    };
  }

  render() {
    const { schedulerData } = this.props;
    return (
      <div>
        <Scheduler
          schedulerData={schedulerData}
          prevClick={this.prevClick}
          nextClick={this.nextClick}
          onSelectDate={this.onSelectDate}
          onViewChange={this.onViewChange}
          eventItemClick={this.eventClicked}
        />
      </div>
    );
  }

  prevClick = schedulerData => {
    schedulerData.prev();
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData
    });
  };

  nextClick = schedulerData => {
    schedulerData.next();
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData
    });
  };

  onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(
      view.viewType,
      view.showAgenda,
      view.isEventPerspective
    );
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData
    });
  };

  onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData
    });
  };

  eventClicked = (schedulerData, event) => {
    alert(
      `You just clicked an event: {id: ${event.id}, title: ${event.title}}`
    );
  };

  ops1 = (schedulerData, event) => {
    alert(
      `You just executed ops1 to event: {id: ${event.id}, title: ${
        event.title
      }}`
    );
  };

  ops2 = (schedulerData, event) => {
    alert(
      `You just executed ops2 to event: {id: ${event.id}, title: ${
        event.title
      }}`
    );
  };

  newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
    if (
      window.confirm(
        `Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`
      )
    ) {
      let newFreshId = 0;
      schedulerData.events.forEach(item => {
        if (item.id >= newFreshId) newFreshId = item.id + 1;
      });

      let newEvent = {
        id: newFreshId,
        title: "New event you just created",
        start: start,
        end: end,
        resourceId: slotId,
        bgColor: "purple"
      };
      schedulerData.addEvent(newEvent);
      this.setState({
        viewModel: schedulerData
      });
    }
  };

  updateEventStart = (schedulerData, event, newStart) => {
    if (
      window.confirm(
        `Do you want to adjust the start of the event? {eventId: ${
          event.id
        }, eventTitle: ${event.title}, newStart: ${newStart}}`
      )
    ) {
      schedulerData.updateEventStart(event, newStart);
    }
    this.setState({
      viewModel: schedulerData
    });
  };

  updateEventEnd = (schedulerData, event, newEnd) => {
    if (
      window.confirm(
        `Do you want to adjust the end of the event? {eventId: ${
          event.id
        }, eventTitle: ${event.title}, newEnd: ${newEnd}}`
      )
    ) {
      schedulerData.updateEventEnd(event, newEnd);
    }
    this.setState({
      viewModel: schedulerData
    });
  };

  moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
    if (
      window.confirm(
        `Do you want to move the event? {eventId: ${event.id}, eventTitle: ${
          event.title
        }, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`
      )
    ) {
      schedulerData.moveEvent(event, slotId, slotName, start, end);
      this.setState({
        viewModel: schedulerData
      });
    }
  };

  onScrollRight = (schedulerData, schedulerContent, maxScrollLeft) => {
    if (schedulerData.ViewTypes === ViewTypes.Day) {
      schedulerData.next();
      schedulerData.setEvents(events);
      this.setState({
        viewModel: schedulerData
      });

      schedulerContent.scrollLeft = maxScrollLeft - 10;
    }
  };

  onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
    if (schedulerData.ViewTypes === ViewTypes.Day) {
      schedulerData.prev();
      schedulerData.setEvents(events);
      this.setState({
        viewModel: schedulerData
      });

      schedulerContent.scrollLeft = 10;
    }
  };

  onScrollTop = (schedulerData, schedulerContent, maxScrollTop) => {
    console.log("onScrollTop");
  };

  onScrollBottom = (schedulerData, schedulerContent, maxScrollTop) => {
    console.log("onScrollBottom");
  };
}

export default Schedule;
