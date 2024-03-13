import React from 'react';
import { PencilSquare,Trash } from 'react-bootstrap-icons';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

function TemplateTable({ templates }) {
  const handleEdit = (templateId) => {
 
    console.log(`Editing template with ID ${templateId}`);
  };

  const handleDelete = (templateId) => {

    console.log(`Deleting template with ID ${templateId}`);
  };

  return (

    <TableContainer component={Paper}>
    <Table >
    <TableHead >
    <TableRow>
    <TableCell >Template ID</TableCell>
    <TableCell>Template Name</TableCell>
    <TableCell >Region</TableCell>
    <TableCell>Modified By</TableCell>
    <TableCell >Modified On</TableCell>
    <TableCell >Actions On</TableCell>  
    </TableRow>    
    </TableHead >
        {templates?.map((template) => (
             <TableRow  key={template.id}>
              <TableCell >{template.id}</TableCell>
              <TableCell >{template.name}</TableCell>
              <TableCell >{template.region}</TableCell>
              <TableCell >{template.modifiedBy}</TableCell>
              <TableCell >{template.modifiedOn}</TableCell>
              <TableCell >{template.modifiedOn}
              <button className="btn btn-sm btn-primary mr-2" onClick={() => handleEdit(template.id)}>
                <PencilSquare />
              </button>
              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(template.id)}>
                <Trash />
              </button>
              </TableCell>
            </TableRow>
        ))}
    
      </Table >
      </TableContainer>
  );
}

export default TemplateTable;


