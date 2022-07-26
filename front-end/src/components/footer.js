

const Footer = ()=>{
    return(

        <footer className="bg-light text-center text-black">

          <div className="container p-4">
    
            <section className="">
              <form action="">

                <div className="row d-flex justify-content-center">

                  <div className="col-auto">
                    <p className="pt-2">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>
                  <div className="col-md-5 col-12">

                    <div className="form-outline form-white mb-4">
                      <input type="email" id="form5Example21" className="form-control" />
                      <label className="form-label mt-5">Email address</label>
                    </div>
                  </div>


                  <div className="col-auto">

                    <button type="submit" className="btn btn-outline-dark mb-4">
                      Subscribe
                    </button>
                  </div>

                </div>
 
              </form>
            </section>
 
          </div>

        </footer>

    )
}

export default Footer;