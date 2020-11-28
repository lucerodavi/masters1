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
      <form id="email-form" name="email-form" data-name="Email Form" data-redirect="/results" redirect="/results"><label htmlFor="name" className="__af-field-label">Text Analysis:</label>
        {proxies['name'] && <input type="text" className="__af-w-input" maxLength={256} name="name" data-name="Name" placeholder="Enter your text . . ." id="name" {...proxies['name']}>{proxies['name'].children}</input>}
        {proxies['submit'] && <input type="submit" value="Submit" data-wait="Please wait..." className="__af-button __af-w-button" {...proxies['submit']}>{proxies['submit'].children}</input>}</form>
        
        {/* <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form" redirect="/results" data-redirect="/results">
<div className="af-class-contact-form-grid-2">
<div id="w-node-6fdc3f15812c-5cb757be"><label htmlFor="Message" id="contact-message" className="af-class-field-label"><strong>Text Analysis</strong></label> 
{proxies['name'] && <input type="text" className="af-class-text-field-3 w-node-43a7f053ed30-5cb757be w-input" maxLength={256} name="name" data-name="name" placeholder="Enter your text here. . ." id="name"  {...proxies['name']}>{proxies['name'].children}  </input>} 
</div>
</div>
{proxies['submit'] && <input type="submit" value="Submit" data-wait="Please wait..." className="__af-button __af-w-button" {...proxies['submit']}>{proxies['submit'].children}</input>}
 </form> */}
      
        {/* <div className="__af-w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div className="__af-w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
            </div>  This needs to be formated a bit better */}
  </div>
</div>
  </span>
          </span>

           
          )
        }}
      

      export default ContactFormView

    /* eslint-enable */