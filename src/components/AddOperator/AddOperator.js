import styles from './AddOperator.module.css';
import React, { useEffect, useState } from 'react';
import { ArrowLeftIcon, Button, Input, Label, Menu, UploadFile,  } from '@arborknot/design-system-v2';
import { useNavigate } from 'react-router-dom';

export default function AddOperator() {

    const [country, setCountry] = useState("Select...");

    const navigate = useNavigate();

    let countries = [
    {
        label: 'Israel',
        value: '1'
    },
    {
        label: 'Greece',
        value: '2'
    },
    {
        label: 'England',
        value: '3'
    }];



    function handleBack() {
        navigate('/');
    }

    function handleAddOperator() {
        // Getting the global state of the list of somethings
        // Adding to that list another something
        console.log("handle add operator");
    }


    useEffect(() => {
        document.title = "Add Operator Page";
    }, [])
    

  return (
    <div className={styles.add_operator}>
        <div className={styles.content__container}>

            <div className={styles.buttons__container}>
                <button onClick={() => handleBack() }> <ArrowLeftIcon/> </button>
                <h1> Add Operator </h1>
            </div>

            <div className={styles.operator_details__container + " white_background"}>
                <div className='name__container'>
                    <Input label='Name'/>
                </div>

                <div className='website_url__container'>
                    <Input label='Website URL'/>
                </div>

                <div className='menu__container'>
                    {countries &&
                    (<Menu
                        label='Country'
                        placeholder={country}
                        onItemClick={(e) => { setCountry(e) }}
                        options={countries}
                    />)}
                </div>
            </div>

            <div className={styles.design__container + " white_background"}>
                <h1> Design </h1>
                <div className='logo__container'>
                    <Label> Logo </Label>
                    <UploadFile description='Upload new logo' />
                </div>

                <div className='color__container'>
                    <p> Pick color </p>
                </div>
            </div>

            <div className='buttons__container'>
                <button onClick={() => handleBack() }> Cancel </button>
                <button onClick={() => handleAddOperator() }> Add Operator </button>
            </div>
        </div>
    </div>
  )
}
