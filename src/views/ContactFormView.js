/* eslint-disable */

    ==>import React from 'react'
      import { createScope, map, transformProxies } from './helpers'

      const scripts = [

      ]

      let Controller

      class ContactFormView extends React.Component {
        static get Controller() {
          if (Controller) return Controller

          try {
            Controller = require('../controllers/ContactFormController')
            Controller = Controller.default || Controller

            return Controller
          }
          catch (e) {
            if (e.code == 'MODULE_NOT_FOUND') {
              Controller = ContactFormView

              return Controller
            }

            throw e
          }
        }

        componentDidMount() {
          scripts.concat(Promise.resolve()).reduce((loaded, loading) => {
            return loaded.then((script) => {
              new Function(`
                with (this) {
                  eval(arguments[0])
                }
              `).call(window, script)

              return loading
            })
          })
        }

        render() {
          const proxies = Controller !== ContactFormView ? transformProxies(this.props.children) : {
            'name': [],
            'submit': [],
          }

          return (
            <span>
              <style dangerouslySetInnerHTML={{ __html: `
                @import url(/css/normalize.css);
                @import url(/css/webflow.css);
                @import url(/css/deepfakes.webflow.css);
              ` }} />
              ==><span className="af-view">
  <div className="w-container">
    <h2><strong>Search accuracy by Text Analysis</strong></h2>
    <p>Copy the text from any article you would like to compare to our Golden Sources and click on the Submit Button</p>
    <div id="formInstructions" className="af-class-small-text"><em className="af-class-italic-text">Fields marked with an asterisk (*) are required.</em></div>
    <div className="w-form">
      <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form" redirect="/results" data-redirect="/results" method="post">
        <div className="af-class-contact-form-grid-2">
          <div id="w-node-6fdc3f15812c-5cb757be"><label htmlFor="Message" id="contact-message" className="af-class-field-label"><strong>Text Analysis</strong></label><textarea-af-sock-name data-name="Message" maxLength={5000} id="Message" name="Message" required placeholder=" Enter your text here. . ." className="af-class-textarea-2 w-input" /></div>
        </div>{map(proxies['submit'], props => <input type="submit" value="Submit" data-wait="Please wait..." {...{...props, className: `af-class-submit-button-2 w-button ${props.className || ''}`}}>{props.children}</input>)}
      </form>
      <div className="w-form-done">
        <div>Thank you! Your submission has been received!</div>
      </div>
      <div className="w-form-fail">
        <div>Oops! Something went wrong while analyzing your text, Please try again later.</div>
      </div>
    </div>
  </div>
</span><==
            </span>
          )
        }
      }

      export default ContactFormView<==

    /* eslint-enable */