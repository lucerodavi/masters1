/* eslint-disable */

    import React from 'react'
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
                <span className="af-view">
                <div className="__af-div-block">
      <h5 className="__af-heading-7">Copy the text from any article you would like to compare to our Golden Sources and click on the Submit Button</h5>
      <div className="__af-w-form">
        <form id="email-form" name="email-form" data-name="Email Form" data-redirect="/thank-you" redirect="/thank-you"><label htmlFor="name" className="__af-field-label">Text Analysis:</label>
        {proxies['name'] && <input type="text" className="__af-w-input" maxLength={256} name="name" data-name="Name" placeholder="Enter your text . . ." id="name" {...proxies['name']}>{proxies['name'].children}</input>}
        {proxies['submit'] && <input type="submit" value="Submit" data-wait="Please wait..." className="__af-button __af-w-button" {...proxies['submit']}>{proxies['submit'].children}</input>}</form>
        
        <div className="__af-w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div className="__af-w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
    </div>
  </div>
</div>
  </span>
          </span>

           
          )
        }}
      

      export default ContactFormView

    /* eslint-enable */