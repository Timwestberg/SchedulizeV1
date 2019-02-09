// import React from "react";
// import Dayz from "dayz";
// // could also import the sass if you have a loader at dayz/dayz.scss
import "dayz/dist/dayz.css";
// import moment from "moment";
// import API from "../../utils/API";

// // would come from a network request in a "real" app
// // const EVENTS = new Dayz.EventsCollection([
// //   {
// //     content: "A short event",
// //     range: moment.range(date.clone(), date.clone().add(1, "day"))
// //   },
// //   {
// //     content: "Two Hours ~ 8-10",
// //     range: moment.range(date.clone().hour(8), date.clone().hour(10))
// //   },
// //   {
// //     content: "A Longer Event",
// //     range: moment.range(
// //       date.clone().subtract(2, "days"),
// //       date.clone().add(8, "days")
// //     )
// //   }

// class DailyView extends React.PureComponent {
//   state = {
//     appointments: [],
//     date: new Date()
//   };

//   loadAppointments = () => {
//     API.getAppts()
//       .then(res => {
//         console.log(res.data);
//         this.setState({
//           appointments: res.data
//         });
//       })
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <Dayz display='week' date={this.state.date} events={this.state.appointments} />
//     );
//   }
// }

// export default DailyView;
import React from "react";
import { render } from "react-dom";
import moment from "dayz/lib/moment-range";
import Dayz from "dayz";
// require('./demo.scss');
let COUNT = 1;

class DailyView extends React.Component {
  constructor(props) {
    super(props);
    this.addEvent = this.addEvent.bind(this);
    this.onEventClick = this.onEventClick.bind(this);
    this.editComponent = this.editComponent.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.onEventResize = this.onEventResize.bind(this);
    const date = moment("2015-09-11");
    this.state = {
      date,
      display: "day",
      events: new Dayz.EventsCollection([
        // {
        //   content: "Continuing event Past",
        //   range: moment.range(moment(), moment())
        // },

        // {
        //   content: "Continuing event Before",
        //   range: moment.range("2015-09-04", "2015-09-09")
        // },

        // {
        //   content: "Weeklong",
        //   range: moment.range("2015-09-06", moment("2015-09-12").endOf("day"))
        // },

        // {
        //   content: "A Longer Event",
        //   range: moment.range(moment("2015-09-04"), moment("2015-09-14"))
        // },

        // {
        //   content: "Inclusive",
        //   range: moment.range(moment("2015-09-07"), moment("2015-09-12"))
        // },

        // {
        //   content: "9am - 2pm (resizable)",
        //   resizable: { step: 15 },
        //   range: moment.range(
        //     moment("2015-09-11").hour(9),
        //     moment("2015-09-11").hour(14)
        //   )
        // },

        {
          content: "8am - 8pm (non-resizable)",
          range: moment.range(
            moment("2015-09-07").hour(8),
            moment("2015-09-07")
              .hour(21)
              .minutes(40)
          )
        }
      ])
    };
  }

  changeDisplay(ev) {
    this.setState({ display: ev.target.value });
  }

  onEventClick(ev, event) {
    event.set({ editing: !event.isEditing() });
  }
  onEventResize(ev, event) {
    const start = event.start.format("hh:mma");
    const end = event.end.format("hh:mma");
    event.set({ content: `${start} - ${end} (resizable)` });
  }

  addEvent(ev, date) {
    this.state.events.add({
      content: `Event ${COUNT++}`,
      resizable: true,
      range: moment.range(
        date.clone(),
        date
          .clone()
          .add(1, "hour")
          .add(45, "minutes")
      )
    });
  }

  editComponent(props) {
    const onBlur = function() {
      props.event.set({ editing: false });
    };
    const onChange = function(ev) {
      props.event.set({ content: ev.target.value });
    };
    const onDelete = function() {
      props.event.remove();
    };
    return (
      <div className='edit'>
        <input
          type='text'
          autoFocus
          value={props.event.content}
          onChange={onChange}
          onBlur={onBlur}
        />
        <button onClick={onDelete}>X</button>
      </div>
    );
  }

  render() {
    return (
      <div className='dayz-test-wrapper'>
        <div className='tools'>
          <label>
            Month:{" "}
            <input
              type='radio'
              name='style'
              value='month'
              onChange={this.changeDisplay}
              checked={"month" === this.state.display}
            />
          </label>
          <label>
            Week:{" "}
            <input
              type='radio'
              name='style'
              value='week'
              onChange={this.changeDisplay}
              checked={"week" === this.state.display}
            />
          </label>
          <label>
            Day:{" "}
            <input
              type='radio'
              name='style'
              value='day'
              onChange={this.changeDisplay}
              checked={"day" === this.state.display}
            />
          </label>
        </div>

        <Dayz
          {...this.state}
          displayHours={[6, 22]}
          highlightDays={[this.state.date]}
          onEventResize={this.onEventResize}
          editComponent={this.editComponent}
          onDayDoubleClick={this.addEvent}
          onEventClick={this.onEventClick}
        />
      </div>
    );
  }
}

export default DailyView;

// const div = document.createElement('div');
// document.body.appendChild(div);
// render(React.createElement(DailyView, {}), div);
