	//importamos el compoente Link desde react-router-dom
	// import { Link } from "react-router-dom";
	// import { useState } from "react";
	import logo from "../../assets/logocasinopeq.png";
	import iconoListin from "../../assets/telefonopeq.png";
	import "./index.css";
	import { Container, Row, Col, Image } from "react-bootstrap";
	import React from "react";
	import DesplegableIT from "../desplegableIT";
	import DesplegableRRHH from "../desplegableRecursos";
	import Calendario from "../calendarioDirectorio";
	import 'bootstrap/dist/css/bootstrap.min.css';
	import Tablon from "../tablonDirectorio";
	import Button from "@restart/ui/esm/Button";
	import MysteryJackpot from "../figureMysteryJackpot";
	import ZeJackpot from "../figureZejackpot";
	import ElTiempo from "../figureElTiempo";
	import BotonListin from "../botonListin";
	
	
	function Directorio() {
		return (
			<Container fluid className="fondo-imagen">
				<Row className="linea-contenedor">
					<Row >
					
					<Col className="linea-uno" md lg="auto" >
						<img
							src={logo}
							alt="logotipo"
							className="columna-logotipo" >
						</img>
					</Col>

					<Col className="columna-tablon">
						 <Tablon lg md="8" className="tablon"/> 
					</Col>

					<Col md="3" className="columna-derecha"  >
								<Row >
									<Button className="boton-listin" onClick={BotonListin} >
									<Image className="ajuste-boton" src={iconoListin} fluid />
									</Button>
								</Row>
								
								<Row className="desplegable" >
									<DesplegableIT/>
									<DesplegableRRHH/>
								</Row> 
						</Col>
					</Row>
					<Row className="linea-dos">
						<Col className="columnaCentrada">               
							<MysteryJackpot/>
						</Col>
						<Col className="columnaCentrada">               
							<ZeJackpot/>
						</Col>
						<Col className="columnaCentrada">
							<ElTiempo/>
						</Col>
						<Col>
							<Row > 
								<Col className="calendario">
								<Calendario/>
								</Col> 
						
							</Row>
						</Col>
					</Row>

			 	 </Row>	
			
			</Container>
			);
		}
		
		export default Directorio;
		