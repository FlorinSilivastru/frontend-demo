import { lazy } from "react";

export const createComponent = (store, moduleName) => {
	return lazy(async () => {
		try {
			const moduleImported = await import(`./../../${moduleName}`);
            //inject saga
            // inject slice
			return moduleImported;
		// eslint-disable-next-line no-unreachable
		} catch (e) {
			return console.log(e);
		}
	});
};