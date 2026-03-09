import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@mui/material";
import React from "react";

export default function MainCollectorTable() {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>CH₄ (об.%)</TableCell>
                        <TableCell>CO₂ (об.%)</TableCell>
                        <TableCell>O₂ (об.%)</TableCell>
                        <TableCell>H₂S (ppm)</TableCell>
                        <TableCell>CO (об.%)</TableCell>
                        <TableCell>
                            Расход, м<sup>3</sup>/ч
                        </TableCell>
                        <TableCell>Давление (мбар)</TableCell>
                        <TableCell>Положение задвижки (%)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell sx={{ width: 50 }}>
                            После оптимизации
                        </TableCell>
                        <TableCell sx={{ width: 70 }}>
                            <TextField
                                size="small"
                                placeholder="0.0"
                            />
                        </TableCell>
                        <TableCell sx={{ width: 70 }}>
                            <TextField
                                size="small"
                                placeholder="0.0"

                            />
                        </TableCell>
                        <TableCell sx={{ width: 70 }}>
                            <TextField
                                size="small"
                                placeholder="0.0"
                            />
                        </TableCell>
                        <TableCell sx={{ width: 70 }}>
                            <TextField
                                size="small"
                                placeholder="0.0"
                            />
                        </TableCell>
                        <TableCell sx={{ width: 70 }}>
                            <TextField
                                size="small"
                                placeholder="0.0"
                            />
                        </TableCell>
                        <TableCell sx={{ width: 85 }}>
                            <TextField
                                size="small"
                                placeholder="0.0"
                            />
                        </TableCell>
                        <TableCell sx={{ width: 80 }}>
                            <TextField
                                size="small"
                                placeholder="0.0"
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                placeholder="0.0"
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{ width: 50 }}>
                            После оптимизации
                        </TableCell>
                        <TableCell sx={{ width: 70 }}>
                            <TextField
                                size="small"
                                placeholder="0.0"
                            />
                        </TableCell>
                        <TableCell sx={{ width: 70 }}>
                            <TextField
                                size="small"
                                placeholder="0.0"

                            />
                        </TableCell>
                        <TableCell sx={{ width: 70 }}>
                            <TextField
                                size="small"
                                placeholder="0.0"
                            />
                        </TableCell>
                        <TableCell sx={{ width: 70 }}>
                            <TextField
                                size="small"
                                placeholder="0.0"
                            />
                        </TableCell>
                        <TableCell sx={{ width: 70 }}>
                            <TextField
                                size="small"
                                placeholder="0.0"
                            />
                        </TableCell>
                        <TableCell sx={{ width: 85 }}>
                            <TextField
                                size="small"
                                placeholder="0.0"
                            />
                        </TableCell>
                        <TableCell sx={{ width: 80 }}>
                            <TextField
                                size="small"
                                placeholder="0.0"
                            />
                        </TableCell>
                        <TableCell sx={{ width: 90 }}>
                            <TextField
                                size="small"
                                placeholder="0.0"
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}