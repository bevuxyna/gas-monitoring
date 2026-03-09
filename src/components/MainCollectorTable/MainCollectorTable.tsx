import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@mui/material";
import React from "react";

export default function MainCollectorTable() {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>
                            CH<sub>4</sub>, об.%
                        </TableCell>
                        <TableCell>
                            CO<sub>2</sub>, об.%
                        </TableCell>
                        <TableCell>
                            O<sub>2</sub>, об.%
                        </TableCell>
                        <TableCell>
                            H<sub>2</sub>S, ppm
                        </TableCell>
                        <TableCell>
                            CO, об.%
                        </TableCell>
                        <TableCell>
                            Расход, м<sup>3</sup>/ч
                        </TableCell>
                        <TableCell>
                            Давление, мбар
                        </TableCell>
                        <TableCell>
                            Положение задвижки, %
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            До оптимизации
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                placeholder="0.0"
                                sx={{ width: 60 }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                placeholder="0.0"
                                sx={{ width: 60 }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                placeholder="0.0"
                                sx={{ width: 60 }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                placeholder="0.0"
                                sx={{ width: 60 }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                placeholder="0.0"
                                sx={{ width: 60 }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                placeholder="0.0"
                                sx={{ width: 80 }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                placeholder="0.0"
                                sx={{ width: 80 }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                placeholder="0.0"
                                sx={{ width: 80 }}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            После оптимизации
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                placeholder="0.0"
                                sx={{ width: 70 }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                placeholder="0.0"
                                sx={{ width: 70 }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                placeholder="0.0"
                                sx={{ width: 70 }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                placeholder="0.0"
                                sx={{ width: 70 }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                placeholder="0.0"
                                sx={{ width: 70 }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                placeholder="0.0"
                                sx={{ width: 85 }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                placeholder="0.0"
                                sx={{ width: 90 }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                placeholder="0.0"
                                sx={{ width: 80 }}
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}