import styles from './ShowTable.module.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import peopleService from '../../services/peopleService';
import { Table, SortIcon, DownloadIcon, Menu } from '@arborknot/design-system-v2';

export default function Page() {

    const [people, setPeople] = useState([]);
    const [columns, setColumns] = useState([]);
    const [search, setSearch] = useState("Search...");
    const [error, setError] = useState(false);

    const [sortBy, setSortBy] = useState("Select...");

    const navigate = useNavigate();

    let tempPeople = [];
    let tempColumns = [];
    let tempSearch = "Search...";

    tempPeople.push({
        email: 'ofek.itz@gmail.com',
        firstName: 'ofek',
        id: '1',
        lastName: 'itzhaki'
    });
    tempPeople.push({
        email: 'a.test@gmail.com',
        firstName: 'this',
        id: '2',
        lastName: 'is'
    });
    tempPeople.push({
        email: 'something@gmail.com',
        firstName: "try",
        id: '3',
        lastName: 'something'
    });

    // console.log(tempPeople);


    tempColumns.push({
        columnKey: 'id',
        label: 'ID'
    });
    tempColumns.push({
        columnKey: 'firstName',
        label: 'First Name'
    });
    tempColumns.push({
        columnKey: 'lastName',
        label: 'Last Name',
    });
    tempColumns.push({
        columnKey: 'email',
        label: 'Email',
    });

    let statuses = [
        {
            label: 'ID',
            value: '1'
        },
        {
            label: 'First Name',
            value: '2'
        },
        {
            label: 'Last Name',
            value: '3'
        },
        {
            label: 'Email',
            value: '4'
        }];


    function handleDownload() {
        console.log("handle download");
        // Do something
    }

    function handleAddOperator() {
        navigate('/addoperator');
    }

    function handleSort() {
        console.log("handle sort");
        // setPeople(...people.sort((p1, p2) => {
        //     return p1 > p2 ? p1 : p2;
        // }))

        // Do something
    }

    function handleSearch(e) {
        console.log("handle search");
        setSearch(e);
        
        // if (e !== tempSearch) {
        //     if (people.some((p) => { p.firstName === e })) 
        //         setPeople(...people.filter( (p) => p.firstName === e ));
        // }
    }

    function handleSortBy(value) {
        setSortBy(value);
    }


    useEffect(() => {
        document.title = "Show Table Page";
        
        peopleService.fillData(setError, setPeople, setColumns)
        .then(() => {
            console.log(people);
            console.log(columns);
            console.log(search);
        });

    }, [])

    if (error === true) return (
        <div>
            <p> This is Page </p>
            <p> An Error has Occured </p>
        </div> 
     )
    

    return (
        <div className={styles.show_table}>
            <div className={styles.content__container}>
                <div className={styles.buttons__container + " one_line_div"}>
                    <h1> Operators </h1>
                    <button onClick={() => handleDownload() }> <DownloadIcon/> </button>
                    <button onClick={() => handleAddOperator() }> Add operator </button>
                </div>

                <div className={styles.table__container + " white_background"}>
                    {statuses &&
                    (<Menu
                        placeholder={sortBy}
                        onItemClick={(e) => { handleSortBy(e) }}
                        options={statuses}
                    />)}
                    <button onClick={() => handleSort() }> Sort <SortIcon/> </button>
                    <Table data={tempPeople} columns={tempColumns} search={{ placeholder: tempSearch, onChange: (e) => { handleSearch(e) } }} />
                </div>
            </div>
        </div>
    )
}
