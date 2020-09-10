export interface ISpacesRes {
	total: number;
	next: string;
	previous: string;
	results: Array<ISpaces>;
}

export interface ISpaces {
	id: string,
	name: string,
	notes: string,
	meta: string,
	space_type: string,
	function: string,
	time_zone: string,
	daily_reset: string,
	current_count: number,
	capacity: number,
	target_capacity: number,
	safe_capacity: number,
	safe_threshold_mode: string,
	safe_threshold_value: string,
	max_dwell_minutes: string,
	parent_id: string,
	ancestry: Array<unknown>,
	address: string,
	latitude: number,
	longitude: number,
	counting_mode: string,
	component_spaces: Array<unknown>,
	floor_level: string,
	space_mappings: Array<unknown>,
	doorways: Array<unknown>,
	tags: Array<string>,
	time_segments: Array<{
		id: string,
		label: string,
		start: string,
		end: string,
		days: Array<'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'>,
	}>,
	time_segment_groups: Array<unknown>,
	size_area: unknown,
	size_area_unit: string,
	annual_rent: unknown,
	annual_rent_currency: string,
	assigned_teams: Array<unknown>,
	sensors_total: number,
	image_url: string,
	created_at: string,
	updated_at: string,
	description: string,
	inherits_time_segments: boolean,
}
