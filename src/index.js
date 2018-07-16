import * as OfflinePluginRuntime from "offline-plugin/runtime";
OfflinePluginRuntime.install();

import "./assets.js";
import { h, app } from "hyperapp";
import { TrackList } from "./components/TrackList";
import { Settings } from "./components/Settings";
import Logo from "./components/Logo";
import ProjectTitle from "./components/ProjectTitle";

const state = {};

const actions = {};

const view = (state, actions) => (
	<div class="paper">
		<div class="row flex-middle">
			<div class="col-3 col">
				<Logo/>
			</div>
			<div class="col-9 col">
				<ProjectTitle/>
				<button>Add</button>
				<button>Save</button>
				<button>Download</button>
			</div>
		</div>
		<Settings />
		<TrackList />
	</div>
);

app(state, actions, view, document.body);
