import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Panel } from "./components/Panel";
import { Display } from "./components/Display";

class Clock extends React.Component {
  constructor(props) {
    super(props); //Siempre hay que hacerlo
    this.state = {
      date: new Date(),
      isDateVisible: false
    };
  }

  shouldComponentUpdate(prev, next) {
    return true;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <main>
        <div className="clock">
          <Panel
            isDateVisible={this.state.isDateVisible}
            onDateCheckedChange={() =>
              this.setState({ isDateVisible: !this.state.isDateVisible })
            }
          />
          <Display
            isDateVisible={this.state.isDateVisible}
            date={this.state.date}
          />
        </div>
      </main>
    );
  }
}

// function Clock() {
//   const [date, setDate] = useState(new Date());
//   const [isDateVisible, setIsDateVisible] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setDate(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <main>
//       <div className="clock">
//         <Panel
//           isDateVisible={isDateVisible}
//           onDateCheckedChange={() => setIsDateVisible(!isDateVisible)}
//         />
//         <Display isDateVisible={isDateVisible} date={date} />
//       </div>
//     </main>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<Clock />, rootElement);
