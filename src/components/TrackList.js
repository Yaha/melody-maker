import { h, app } from "hyperapp";
import { TrackItem } from "./TrackItem";

export const TrackList = () => (
	<fieldset>
		<legend>Tracks</legend>
		<table>
			<thead>
				<tr>
					<th>Tracks</th>
					<th>Sound</th>
					<th colspan="8" />
				</tr>
			</thead>
			<tbody>
				<TrackItem />
			</tbody>
		</table>
	</fieldset>
);
