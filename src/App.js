import React, { Component } from "react";
import { getData } from "./utils/api";

class App extends Component {
  state = {
    loading: true,
    data: null
  };

  componentDidMount() {
    getData().then(data =>
      this.setState(prevState => ({
        ...prevState,
        data: data.data.records,
        loading: !prevState.loading
      }))
    );
  }

  render() {
    const { loading, data } = this.state;
    console.log(data);

    if (loading) {
      return (
        <div style={{ textAlign: `center`, margin: `40px` }}>LOADING!!!</div>
      );
    }

    return (
      <div style={{ textAlign: `center`, margin: `40px` }}>
        {data.map(dataPoint => {
          const { Name } = dataPoint.fields;
          return (
            <div
              key={dataPoint.id}
              style={{
                padding: `10px`,
                border: `1px solid gray`,
                marginBottom: `10px`
              }}
            >
              {Name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
