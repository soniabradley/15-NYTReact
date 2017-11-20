
import React, {Component} from "react";
import API from "../../utils/API.js";
import Header from "../Header";
import Search from "../Search";
import Result from "../Result";
import Article from "../Article";

class Content extends Component {
    state = {
        search: "",
        begin_date: "20170606",
        end_date: "20170808",
        results:[]
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        API.search(this.state.search, this.state.begin_date, this.state.end_date).then((result) => {
            // console.log(result);
            const data = result.data.response.docs;
            this.setState({
            results: data
            });
        });
    }

    handleTopicChange = (e) => {
        e.preventDefault();
        this.setState({
            search: e.target.value
        })
    }

    handleSaveArticle = (e) => {
        e.preventDefault();
        
    }

    render() {
        return(
            <div className="container">
                <Header />
                <Search 
                search = {this.state.search}
                // begin_date = {this.state.begin_date}
                // end_date = {this.state.end_date}
                handleTopicChange = {this.handleTopicChange}
                onFormSubmit={this.onFormSubmit} 
                />
                <Result 
                renderResult={this.state.results} 
                handleSaveArticle={this.handleSaveArticle}
                />
                <Article />
            </div>
        )
    }
}

export default Content;