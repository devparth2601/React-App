<div className="container">
  <div className="row">
    <div className="col">
      {/* {this.state.status != "completed"
        ? "Loading..."
        : "will be print"} */}
      <button onClick={this.btnchng}>Click</button>
      {this.state.status === "success" ? (
        <div>
          <table>
            <thead>
              <tr>{this.renderTableHeader()}</tr>
            </thead>
            <tbody>{this.renderTableRows()}</tbody>
          </table>
        </div>
      ) : (
        "no data found"
      )}
    </div>
  </div>
</div>;
