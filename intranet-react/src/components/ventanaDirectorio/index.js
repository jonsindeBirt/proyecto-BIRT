	//importamos el compoente Link desde react-router-dom
	// import { Link } from "react-router-dom";
	// import { useState } from "react";
	import logo from "../assets/logocasino.png";
	import botonListin  from "../assets/telefonopeq.png";
	import "./index.css";
	import { Container, Row, Col, ThemeProvider, Figure, Image } from "react-bootstrap";
	import React from "react";
	import DesplegableIT from "../desplegableIT/desplegableIT";
	import DesplegableRRHH from "../desplegableRRHH/desplegableRRHH";
	import Calendario from "../calendarioDirectorio";
	import 'bootstrap/dist/css/bootstrap.min.css';
	import MostrarTablon from "../mostrarTablon/mostrarTablon"; 
	import Button from "@restart/ui/esm/Button";
	import MysteryJackpot from "../figureZeJackpot";
	import ZeJackpot from "../figureZeJackpot";
	import ElTiempo from "../figureElTiempo";

	
	// import { Dimensions } from "react-native";
	
	// var width = Dimensions.get('window').width; //full width
	// var height = Dimensions.get('window').height; //full height
	
	
	
	function Directorio() {
		return (
			<Container fluid className="fondo-imagen">
				<Row className="h-65">
					<Row>
						<Col xs={12} md lg={9}  className="columna-izquierda"  >
							<Row className="logotipo-superior">
								<img
									src={logo}
									alt="logotipo">
								</img>
							</Row>  
							
							<Row className="tablon">
								<Col >
									 <MostrarTablon/> 
								</Col>
							
							</Row>
						</Col>
			
			
						<Col className="columna-derecha-directorio" md lg={3} xs={12
						} >
								<Row>
									<Button className="boton-listin w-25" >
									<Image className="ajuste-boton" src={botonListin} fluid />
									
									</Button>
								</Row>
								
								<Row className="desplegable" >
									<DesplegableIT/>
									<DesplegableRRHH/>
								</Row> 
						</Col>
			
					</Row>
					<Row className="h-35">
						<Col>               
							<MysteryJackpot/>
						</Col>
						<Col>               
							<ZeJackpot/>
						</Col>
						<Col>
							<ElTiempo/>
						</Col>
						<Col>
							<Row className="calendario">  
							<Calendario/>
							</Row>
						</Col>
					</Row>
			 	 </Row>	
			
			</Container>
			);
		}
		
		export default Directorio;
		