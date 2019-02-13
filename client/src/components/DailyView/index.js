// import "dayz/dist/dayz.css";
import React from "react";
import { render } from "react-dom";
// import renderDays from "dayz/lib/dayz"
// import moment from "dayz/lib/moment-range";
// import Dayz from "dayz";
// import API from "../../utils/API";
// import "dayz/demo.scss";
// let COUNT = 1;
import Scheduler, {
  SchedulerData,
  ViewTypes,
  DATE_FORMAT,
  DemoData
} from "react-big-scheduler";
import withDragDropContext from "./withDnDContext";

//include `react-big-scheduler/lib/css/style.css` for styles, link it in html or import it here
import "react-big-scheduler/lib/css/style.css";

import moment from "moment";

//set locale moment to the schedulerData, if your locale isn't English. By default, Scheduler comes with English(en, United States).

class DailyView extends React.Component {
  constructor(props) {
    super(props);

    // let schedulerData = new SchedulerData(new moment("2017-12-18").format(DATE_FORMAT), ViewTypes.Week);
    let schedulerData = new SchedulerData("2017-12-18", ViewTypes.Week);
    schedulerData.localeMoment.locale("en");
    schedulerData.setResources(DemoData.resources);
    schedulerData.setEvents(DemoData.events);
    this.state = {
      viewModel: schedulerData
    };
  }

  render() {
    const { viewModel } = this.state;
    return (
      <div>
        <div>
          <Scheduler
            schedulerData={viewModel}
            prevClick={this.prevClick}
            nextClick={this.nextClick}
            onSelectDate={this.onSelectDate}
            onViewChange={this.onViewChange}
            eventItemClick={this.eventClicked}
            viewEventClick={this.ops1}
            viewEventText="Ops 1"
            viewEvent2Text="Ops 2"
            viewEvent2Click={this.ops2}
            updateEventStart={this.updateEventStart}
            updateEventEnd={this.updateEventEnd}
            moveEvent={this.moveEvent}
            newEvent={this.newEvent}
            onScrollLeft={this.onScrollLeft}
            onScrollRight={this.onScrollRight}
            onScrollTop={this.onScrollTop}
            onScrollBottom={this.onScrollBottom}
          />
        </div>
      </div>
    );
  }

  prevClick = schedulerData => {
    schedulerData.prev();
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  nextClick = schedulerData => {
    schedulerData.next();
    schedulerData.setEvents(DemoData.events);
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
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(DemoData.events);
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
      schedulerData.setEvents(DemoData.events);
      this.setState({
        viewModel: schedulerData
      });

      schedulerContent.scrollLeft = maxScrollLeft - 10;
    }
  };

  onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
    if (schedulerData.ViewTypes === ViewTypes.Day) {
      schedulerData.prev();
      schedulerData.setEvents(DemoData.events);
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
  // constructor(props) {
  //   super(props);
  //   this.addEvent = this.addEvent.bind(this);
  //   this.onEventClick = this.onEventClick.bind(this);
  //   this.editComponent = this.editComponent.bind(this);
  //   this.changeDisplay = this.changeDisplay.bind(this);
  //   this.onEventResize = this.onEventResize.bind(this);
  //   const date = moment();
  //   this.state = {
  //     date,
  //     display: "week",
  //     events: null,
  // new Dayz.EventsCollection([
  // {
  //   content: "Continuing event Past",
  //   range: moment.range(moment("2019-02-08"), moment("2019-02-14"))
  // },
  // {
  //   content: "Continuing event Before",
  //   range: moment.range("2019-02-04", "2019-02-09")
  // },
  // {
  //   content: "Weeklong",
  //   range: moment.range("2019-02-06", moment("2019-02-12").endOf("day"))
  // },
  // {
  //   content: "A Longer Event",
  //   range: moment.range(moment("2019-02-04"), moment("2019-02-14"))
  // },
  // {
  //   content: "Inclusive",
  //   range: moment.range(moment("2019-02-07"), moment("2019-02-12"))
  // },
  // {
  //   // content: `Tim Westberg: ${moment().format("MMMM Do YYYY")}`,
  //   content: ,
  //   resizable: { step: 15 },
  //   range:
  //   moment.range(
  //     moment()
  //       .hour(10)
  //       .minute(0),
  //     moment()
  //       .hour(14)
  //       .minute(0)
  //   )
  // }
  // {
  //   content: "8am - 8pm (non-resizable)",
  //   range: moment.range(
  //     moment("2019-02-07").hour(8),
  //     moment("2019-02-07")
  //       .hour(21)
  //       .minutes(40)
  //   )
  // }
  // {
  //   content: "10am - 10pm",
  //   range: moment.range(
  //     moment("2019-02-09")
  //       .hour(8)
  //       .minute(0),
  //     moment("2019-02-09")
  //       .hour(9)
  //       .minute(30)
  //   )
  // }
  // ]),
  //     appointments: []
  //   };
  // }
  //   appointment data comes in from the data base
  //   componentDidMount = () => {
  //     this.loadAppointments();
  //   };
  //   loadAppointments = () => {
  //     API.getAppts()
  //       .then(res => {
  //         // console.log("appts:", res.data);
  //         this.setState({
  //           events: res.data
  //           // appointments: [res.data]
  //         });
  //         console.log(this.state.range);
  //       })
  //       .catch(err => console.log(err));
  //   };
  //   changeDisplay(ev) {
  //     this.setState({ display: ev.target.value });
  //   }
  //   onEventClick(ev, event) {
  //     event.set({ editing: !event.isEditing() });
  //   }
  //   onEventResize(ev, event) {
  //     const start = event.start.format("hh:mma");
  //     const end = event.end.format("hh:mma");
  //     event.set({ content: `${start} - ${end} (resizable)` });
  //   }
  //   //   renderDays()
  //   addEvent(ev, date) {
  //     this.state.events.add({
  //       content: `Event ${COUNT++}`,
  //       resizable: true,
  //       range: moment.range(
  //         date.clone(),
  //         date
  //           .clone()
  //           .add(1, "hour")
  //           .add(45, "minutes")
  //       )
  //     });
  //   }
  //   editComponent(props) {
  //     const onBlur = function() {
  //       props.event.set({ editing: false });
  //     };
  //     const onChange = function(ev) {
  //       props.event.set({ content: ev.target.value });
  //     };
  //     const onDelete = function() {
  //       props.event.remove();
  //     };
  //     return (
  //       <div className="edit">
  //         <input
  //           type="text"
  //           autoFocus
  //           value={props.event.content}
  //           onChange={onChange}
  //           onBlur={onBlur}
  //         />
  //         <button onClick={onDelete}>X</button>
  //       </div>
  //     );
  //   }
  //   render() {
  //     return (
  //       <div className="dayz-test-wrapper">
  //         <div className="tools">
  //           <label>
  //             Month:
  //             <input
  //               type="radio"
  //               name="style"
  //               value="month"
  //               onChange={this.changeDisplay}
  //               checked={"month" === this.state.display}
  //             />
  //           </label>
  //           <label>
  //             Week:
  //             <input
  //               type="radio"
  //               name="style"
  //               value="week"
  //               onChange={this.changeDisplay}
  //               checked={"week" === this.state.display}
  //             />
  //           </label>
  //           <label>
  //             Day:
  //             <input
  //               type="radio"
  //               name="style"
  //               value="day"
  //               onChange={this.changeDisplay}
  //               checked={"day" === this.state.display}
  //             />
  //           </label>
  //         </div>
  //         <Dayz
  //           {...this.state}
  //           displayHours={[6, 22]}
  //           highlightDays={[this.state.date]}
  //           onEventResize={this.onEventResize}
  //           editComponent={this.editComponent}
  //           onDayDoubleClick={this.addEvent}
  //           onEventClick={this.onEventClick}
  //         />
  //       </div>
  //     );
  //   }
}

export default withDragDropContext(DailyView);

// const div = document.createElement('div');
// document.body.appendChild(div);
// render(React.createElement(DailyView, {}), div);
