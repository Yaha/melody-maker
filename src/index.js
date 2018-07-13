import * as OfflinePluginRuntime from "offline-plugin/runtime";
OfflinePluginRuntime.install();

import "./assets/scss/styles.scss";
import { h, app } from "hyperapp";

const state = {};

const actions = {};

const view = (state, actions) => (
	<div class="paper container">
		<h1>Melody Maker</h1>
		<div class="row">
			<div class="col-4 col">
				<button>Add</button>
				<button>Save</button>
				<button>Download</button>
			</div>
			<div class="col-8 col">
				<input
					id="projectName"
					class="input-block"
					type="text"
					placeholder="Name of your project"
				/>
			</div>
		</div>
		<form>
			<fieldset>
				<legend>Global Settings</legend>
				<div class="row">
					<div class="col-4 col">
						<div class="form-group">
							<label for="frame">Frame per second</label>
							<select id="frame">
								<option>1</option>
							</select>
						</div>
					</div>
					<div class="col-4 col">
						<div class="form-group">
							<label for="language">Language</label>
							<select id="language">
								<option>English</option>
								<option>French</option>
							</select>
						</div>
					</div>
					<div class="col-4 col">
						<div class="form-group">
							<label for="gamme">Gamme (optionnal)</label>
							<select id="gamme">
								<option>E#</option>
							</select>
						</div>
					</div>
				</div>
			</fieldset>
		</form>
		<table>
			<thead>
				<tr>
					<th>Tracks</th>
					<th>Sound</th>
					<th colspan="8" />
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Line name</td>
					<td>
						<select>
							<option>Frequence style</option>
						</select>
					</td>
					<td colspan="8" />
				</tr>
				<tr>
					<td>Line 2</td>
					<td>
						<select>
							<option>Piano style</option>
						</select>
					</td>
					<td colspan="8" />
				</tr>
			</tbody>
		</table>
	</div>
);

app(state, actions, view, document.body);
