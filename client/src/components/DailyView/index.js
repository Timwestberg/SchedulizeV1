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
// import renderDays from "dayz/lib/dayz"
import moment from "dayz/lib/moment-range";
import Dayz from "dayz";
import API from "../../utils/API";
import "dayz/demo.scss";
let COUNT = 1;

class DailyView extends React.Component {
  constructor(props) {
    super(props);
    this.addEvent = this.addEvent.bind(this);
    this.onEventClick = this.onEventClick.bind(this);
    this.editComponent = this.editComponent.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.onEventResize = this.onEventResize.bind(this);
    const date = moment();
    this.state = {
      date,
      display: "week",
      events: new Dayz.EventsCollection([
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

        {
          content: `Tim Westberg: ${moment().format("MMMM Do YYYY")}`,
          resizable: { step: 15 },
          range: moment.range(
            moment().hour(10).minute(0),
            moment().hour(14).minute(0)
          )
        },

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
      ]),
      appointments: []
    };
  }

  //   appointment data comes in from the data base
  //   componentDidMount = () => {
  //     this.loadAppointments();
  //   };

  //   loadAppointments = () => {
  //     API.getAppts()
  //       .then(res => {
  //         console.log(res.data);
  //         const apptDate = moment(res.data.apptDate).format();
  //         console.log(`appointment Date: ${apptDate}`);
  //         const apptDay = "";
  //         const apptTime = "";
  //         this.setState({
  //           events: new Dayz.EventsCollection([
  //             {
  //               content: "Test",
  //               range: moment.range(
  //                 apptDate,
  //                 moment(apptDate)
  //                   .format()
  //                   .hour(+2)
  //                   .hour(21)
  //                   .minutes(40)
  //                 // moment("2019-02-08"),
  //                 // moment("2019-02-09")
  //               )
  //             }
  //           ]),
  //           appointments: res.data
  //         });
  //         console.log(this.state.range);
  //       })
  //       .catch(err => console.log(err));
  //   };

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

  //   renderDays()

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
          {/* <label>
            Month:{" "}
            <input
              type='radio'
              name='style'
              value='month'
              onChange={this.changeDisplay}
              checked={"month" === this.state.display}
            />
          </label> */}
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
