const MobileSearch = () => {
    return(

        <section className="mobilesearch">
		<div className="container">
			<div className="msrch">
				<form>
					<div className="d-flex justify-content-center">
						<div>
							<select className="topsearchselect">
								<option>Players</option>
								<option>Teams</option>
							</select>
						</div>
						<div>
							<input type="text" className="topsearchfield" name="" placeholder="Search..." />
						</div>
						<div>
							<button className="toploginBtn"><i className="fas fa-search"></i></button>
						</div>
						<div>
							<a href="/" className="toploginBtn closemobile-search d-block"><i className="fas fa-times"></i></a>
						</div>
					</div>
				</form>
			</div>
		</div>
	</section>
    )
}
export default MobileSearch;