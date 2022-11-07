const people = {
    fillData: async function(setPeople, setColumns, setError) {
        let tempPeople = [];
        let tempColumns = [];

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
        
        if (tempPeople === undefined || tempColumns === undefined) setError(true);

        setPeople(tempPeople);
        setColumns(tempColumns);
    }
}

export default people;