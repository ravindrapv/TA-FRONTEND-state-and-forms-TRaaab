import React, { Component } from "react";

export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            register:"",
        }
    }

    render() {
        this.handelSubmit = (event) => {
            this.setState({
                register:event.target.value
            })
        }

        return (
            <div>
                <div className="container">
                    <h1>Register</h1>
                    <div className="card">
                        <form action="" onChange={this.handelChange}>
                            <label htmlFor="name">textInput</label>
                            <input
                                type="text"
                                placeholder="enter name"
                                required
                                id="name"
                            />
                            <label htmlFor="date">dateInput</label>
                            <input type="date" id="date"  />
                            <label htmlFor="file">fileInput</label>
                            <input type="file" name="file" id="file" />
                            <label htmlFor="read">reaf-only-input</label>
                            <input type="text" id="read" name="read" value="read" readOnly />
                            <label htmlFor="disabled"></label>
                            <input type="text" id="disabled" disabled />
                            <label htmlFor="textarea">text-area</label>
                            <textarea name="textarea" id="textarea"></textarea>
                            <label htmlFor="textarea">text-area-disabled</label>
                            <textarea name="textarea" id="textarea" disabled></textarea>
                            <input onClick={this.handelSubmit} type="button" value="submit" className='btn' />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
