import React, { Component } from "react";
import "./Search.css";


class Search extends Component {

    handleInput = (e) => {
        this.props.topic = (e.target.elements.topic.value);
    }
    
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading"><h3>Search</h3></div>
                <div className="panel-body">
                <form className="form" onSubmit={this.props.onFormSubmit}>
                    <h4>Enter Topic</h4>
                    <div className="">
                        <input required type="text" className="form-control" name="topic" onChange={this.props.handleTopicChange} value={this.props.search}/>
                    </div>

                    <h4>Start Date</h4>
                    <div className="">
                        <input type="text" className="form-control" placeholder="      YYYY/MM/DD"/>
                    </div>

                    <h4>End Date</h4>
                    <div className="">
                        <input type="text" className="form-control" placeholder="      YYYY/MM/DD" />
                    </div>
                    <br>
                    </br>
                    <button  className="btn btn-primary">Search</button>
                </form>
                </div>
            </div>
        );
    }
}

export default Search;