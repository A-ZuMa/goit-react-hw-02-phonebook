import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import styles from './Filter.module.css'

export class Filter extends Component {
  render() {
    return (
      <div className={styles.filterContainer}>
        <p>Find contacts by name</p>
        <Formik
          initialValues={{
            search: '',
          }}
          onSubmit={(values, actions) => {
            console.log(values);
          }}
        >
          <Form>
            <div className={styles.container}>
              <label htmlFor="search">Name</label>
              <Field
                id="search"
                name="search"
                placeholder="Hermione Kline"
                value={this.props.inputValue}
                onChange={this.props.handleChange}
              />
            </div>
          </Form>
        </Formik>
      </div>
    );
  }
}