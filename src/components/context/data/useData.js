import { useContext } from "react";
import { firestore, getDocs } from "../../../firebase";
import DataContext from "./DataContext";

const useData = () => {
	const { state, dispatch } = useContext(DataContext);
	const getData = async (collectionName, type) => {
		try {
			const res = await firestore.collection(collectionName).get();
			const dataList = [];
			res.docs.forEach((doc) => {
				dataList.push(getDocs(doc));
			});
			dispatch({
				type,
				payload: dataList,
			});
		} catch (err) {
			console.log(err);
		}
	};
	return {
		...state,
		getData,
	};
};

export default useData;
