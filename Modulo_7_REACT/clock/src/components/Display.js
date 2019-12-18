import React from "react";
import DateTime from "../lib";

// 1) Extiendo de React.Component
// 2) Implemento metodo render
// 3) Mis props estaran en this.props
class Display extends React.Component {
  render() {
    return (
      <div className="display">
        <div className="display-time">
          {DateTime.toTimeString(this.props.date)}
        </div>
        {this.props.isDateVisible && (
          <div className="display-date">
            {DateTime.toDateString(this.props.date)}
          </div>
        )}
      </div>
    );
  }
}

// function Display({ isDateVisible, date }) {
//   return (
//     <div className="display">
//       <div className="display-time">{DateTime.toTimeString(date)}</div>
//       {isDateVisible && (
//         <div className="display-date">{DateTime.toDateString(date)}</div>
//       )}
//     </div>
//   );
// }

export { Display };
