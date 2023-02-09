import { DataGrid } from '@mui/x-data-grid';

// import logo from '../logo.svg';
import Datafetcher from '../dataloader/Datafetcher';
import React from 'react';
function Table(){
    // const [data, setData] = React.useState([]);
    // const [list, setlist] = React.useState([]);

    const data = Datafetcher({url:"https://api.github.com/repos/Equator-Studios/scrapers/contents/scrapers"})
    data.forEach(function(row, index){
        row.id = index+1;
    })
    
    return (
        <div style={{ width: '100%' }}>
                <DataGrid
                    autoHeight
                    columns={[
                        { field: 'Name', width:200, headerAlign: 'center'},
                        { field: 'Github Link', width:300, headerAlign: 'center',
                            renderCell: ({ value }) => (
                                <a href={value} target="_blank" rel="noopener noreferrer">
                                {value}
                                </a>
                            )
                        },
                        { field: 'Download Link', width:300, headerAlign: 'center',
                            renderCell: ({ value }) => (
                                <a href={value} download>
                                    Download
                                </a>
                            )
                        },
                    ]}
                    rows={data}
                        // componentsProps={{
                        //     columnMenu: { background: 'red', counter: data.length },
                        // }}
                    pageSize={10}
                    options={{autoWidth: true}}
                    />
        </div>
    )
}

export default Table;