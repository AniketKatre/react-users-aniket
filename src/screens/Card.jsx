import { Button } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import '../assets/User.css';

const userDetailsApi = `https://jsonplaceholder.typicode.com/users`

const Carduser = () => {

    /// START - API
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch(userDetailsApi)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setDatas(data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    })
    //// END


    const btnHandler = (data) => {
        var curr_tog_fol = document.querySelector(`#follow-${data.id}`)
        var head = document.querySelector(`.head-${data.id}`)
        let i = document.createElement("i");
        if (curr_tog_fol.textContent === "Follow ") {
            curr_tog_fol.classList.remove('follow-btn')
            curr_tog_fol.classList.add('.unfollow-btn')
            curr_tog_fol.textContent = "UnFollow "
            i.classList.add("fa", "fa-user-times")
            curr_tog_fol.appendChild(i)
            head.textContent = `${data.name} ⭐`
        }
        else {
            curr_tog_fol.classList.remove('.unfollow-btn')
            curr_tog_fol.classList.add('follow-btn')
            curr_tog_fol.textContent = "Follow "
            i.classList.add("fa", "fa-user-plus")
            i.style.color = "white"
            curr_tog_fol.appendChild(i)
            head.textContent = `${data.name}`
        }
    }


    // delete handler
    const deleteHandler = (id) => {
        var cur_elm = document.querySelector(`#card-${id}`)
        cur_elm.remove()
    }


    return (
        <>
            <p className='title' style={{ textAlign: "center" }}>USER CARDS</p>
            <main>

                <section id="products" className="container products-section">
                    <div className="products-area">

                        {datas.map((data) => {


                            return (

                                <div className="card" id={`card-${data.id}`}>
                                    <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${data.name}`} variant='top' className='avatar' />

                                    <h5 className={`head-${data.id}`}> {data.name} </h5>

                                    <p className="title"><i className="fa fa-envelope"></i><a href={`mailto:${data.email}`} target="_blank" >{data.email}</a></p>
                                    <p className="title"><i className="fa fa-phone"></i><a href={`tel:${data.phone}`} target="_blank" >{data.phone}</a></p>
                                    <p className="title"><i className="fa fa-link"></i><a href={`https://${data.website}`} target="_blank" >{data.website}</a></p>


                                    <div className="row">
                                        <div className="column">

                                            <Button className="follow-btn" onClick={() => btnHandler(data)} id={`follow-${data.id}`}>
                                                Follow <i className="fa fa-user-plus" id={`icon-${data.id}`}></i>
                                            </Button>
                                        </div>
                                        <div className="column">
                                            <Button className="delete" id={`delete-${data.id}`} onClick={() => deleteHandler(data.id)} >
                                                <i className="fa fa-trash"></i>
                                                Delete
                                            </Button>
                                        </div>



                                    </div>

                                </div>

                            )
                        })
                        }




                    </div>
                </section>
            </main >
        </>
    )
}

export default Carduser

