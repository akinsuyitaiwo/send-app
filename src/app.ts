import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("welcome to Democredit app");
});

app.use((req, res) => res.status(404).send({
	status: "error",
	message: "Route not correct kindly check url.",
}));
  
(async () => {
	app.listen(port || 4000, async () => {
		console.log(
			`DemoCredit API listening on ${port || 4000}`
		);
	});
})(); 

process.on("unhandledRejection", (error: any) => {
	console.log("FATAL UNEXPECTED UNHANDLED REJECTION!", error.message);
	console.error("\n\n", error, "\n\n");	
});
  
export default app;