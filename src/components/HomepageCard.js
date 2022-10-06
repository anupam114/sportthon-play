const HomePageCard = () => {
    return(
        <section className="homeplaylist mt-4 mb-5">
		<div className="container-fluid">
			<div className="row ">
				<div className="col-lg-2 col-md-6 mb-4">
					<div className="homeplayitem shadow text-center rounded border">
						<div className="playitenimg">
							<img alt="gal"src="frontend/images/playitem/basketball.png" />
						</div>
						<div className="palyitencontent">
							<h2>BASKETBALL</h2>
							<p>Basketball is a team sport in which two teams, most commonly of five players each, compete with the primary objective of shooting a basketball through the defender's hoop</p>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center">
				<a href="/" className="btn btn-danger rounded">Read More</a>
			</div>
		</div>
	</section>
    )
}
export default HomePageCard;