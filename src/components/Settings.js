import { h, app } from "hyperapp";

export const Settings = () => (
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
);
