# Explain K8s UI

Angular UI for consuming and displaying JSON arrays generated by [explain-k8s-generator](https://github.com/Insulince/explain-k8s-generator).

## Usage

The location the UI searches for for the `json` file from `explain-k8s-generator` is defined under `src/environments/environment.ts` under the key `explanationsLocation`. Default location is `/assets/explanations.json`, which, in an HTTP request will resolve to the file under `src/assets/explanations.json` in your browser.

So, run `explain-k8s-generator`, copy the file to the location defined above, and run the UI to see them rendered in a user-friendly view.

Other than that, its just a pretty standard Angular UI. It uses angular material for styling and layout. There is routing set up, but it all just routes to the `/` endpoint, which loads the latest `json` file.

`npm install` to install required dependencies.

`npm start` to start serving the application. Once complete, the application is available at `localhost:4200`

## Can you tell me more about how this project works?

No. Go read the README at [explain-k8s-generator](https://github.com/Insulince/explain-k8s-generator) where its already been explained. There's a lot of typing involved that I won't want to duplicate.
