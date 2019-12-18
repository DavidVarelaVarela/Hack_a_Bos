import React from "react";

// 1) Extiendo de React.Component
// 2) Implemento metodo render
// 3) Mis props estaran en this.props
class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        <input
          type="checkbox"
          checked={this.props.isDateVisible}
          onChange={this.props.onDateCheckedChange}
        />
        <span>Calendar</span>
      </div>
    );
  }
}

// function Panel({ isDateVisible, onDateCheckedChange }) {
//   return (
//     <div className="panel">
//       <input
//         type="checkbox"
//         checked={isDateVisible}
//         onChange={onDateCheckedChange}
//       />
//       <span>Calendar</span>
//     </div>
//   );
// }

export { Panel };
