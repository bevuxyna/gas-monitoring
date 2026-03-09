import { GridColDef } from '@mui/x-data-grid';

export const protocolsColumns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ГСС', width: 90 },
    {
        field: 'firstName',
        headerName: 'Объект',
        width: 150,
    },
    {
        field: 'lastName',
        headerName: 'Дата создания',
        width: 150,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
