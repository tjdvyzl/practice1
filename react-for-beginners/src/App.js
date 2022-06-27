import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/movie/:id' element={<Detail />}></Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App;