import React from "react"
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Col,
	Container,
	Input,
	Label,
	Row
} from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"
import PreviewCardHeader from "../../Components/Common/PreviewCardHeader"
import { alertService } from "../../services"

const SimpleForm = () => {
	const handleSubmit = async () => {
		const { isConfirmed } = await alertService.fireDialog({
			title: "Hello",
			content: "Nooooooo"
		})
		console.log("confirm", isConfirmed)
	}

	return (
		<form>
			<div className="mb-3 d-flex justify-content-end">
				<Button onClick={handleSubmit} type="button">
					Submit
				</Button>
			</div>
			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">Company Info</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									Year of Record
								</Label>
								<Input className="form-control" htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									Project Type
								</Label>
								<select htmlFor="form-name" className="form-select">
									<option></option>
								</select>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									Gross value of construction work
								</Label>
								<Input className="form-control" htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									No of projects
								</Label>
								<Input className="form-control" htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									Employment Size
								</Label>
								<Input className="form-control" htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									Company Size
								</Label>
								<Input className="form-control" htmlFor="form-name" />
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>

			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">Energy Consumption</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									Petrol Usage
								</Label>
								<Input className="form-control" htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									Diesel Usage
								</Label>
								<Input className="form-control" htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									Biodiesel Usage
								</Label>
								<Input className="form-control" htmlFor="form-name" />
							</div>
						</Col>
					</Row>

					<Row className="mb-3">
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									Amount of electricity (HKE)
								</Label>
								<Input className="form-control" htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									Amount of electricity (CLP)
								</Label>
								<Input className="form-control" htmlFor="form-name" />
							</div>
						</Col>
					</Row>

					<Row>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									No of projects using renewable energy
								</Label>
								<Input className="form-control" htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									No of projects using electric vehicle or construction plant
								</Label>
								<Input className="form-control" htmlFor="form-name" />
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>
		</form>
	)
}

const UploadESGData = () => {
	return (
		<div className="page-content">
			<Container fluid>
				<BreadCrumb title="Upload ESG Data" />
				<SimpleForm />
			</Container>
		</div>
	)
}

export default UploadESGData
