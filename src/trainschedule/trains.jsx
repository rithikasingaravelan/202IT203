import React from "react";
import './trains.css'

const Login = ()=>{
    return(
        <>
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
        <div className="main">
                <h1>John Doe Railways</h1>
                <div class="row m-5">
                    <div class="col-sm-3">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Chennai Express</h5>
                        <h6 class="card-subtitle mb-2">2344</h6>
                        <p class="card-text text-start mx-3">Departure Time: 21:35:00</p>
                        <h6 class="card-subtitle mt-2 mx-3 text-start" >Seats Available: </h6>
                        <p class="card-text text-start mx-3">Sleeper: 3 <br></br>AC: 1</p>
                    </div>
                </div>
                    </div>
                    <div class="col-sm-3">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Hyderabad Express</h5>
                        <h6 class="card-subtitle mb-2">2341</h6>
                        <p class="card-text text-start mx-3">Departure Time: 23:55:00</p>
                        <h6 class="card-subtitle mt-2 mx-3 text-start" >Seats Available: </h6>
                        <p class="card-text text-start mx-3">Sleeper: 6 <br></br>AC: 3</p>
                    </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Delhi Door Hai Express</h5>
                        <h6 class="card-subtitle mb-2">2343</h6>
                        <p class="card-text text-start mx-3">Departure Time: 9:45:00</p>
                        <h6 class="card-subtitle mt-2 mx-3 text-start" >Seats Available: </h6>
                        <p class="card-text text-start mx-3">Sleeper: 32 <br></br>AC: 1</p>
                    </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Mumbai Express</h5>
                        <h6 class="card-subtitle mb-2">2344</h6>
                        <p class="card-text text-start mx-3">Departure Time: 4:35:00</p>
                        <h6 class="card-subtitle mt-2 mx-3 text-start" >Seats Available: </h6>
                        <p class="card-text text-start mx-3">Sleeper: 7 <br></br>AC: 2</p>
                    </div>
                      </div>
                    </div>
</div>    
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

        </>

    )
}
export default Login;