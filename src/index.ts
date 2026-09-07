export type TimezoneType = {
	tzCode: string
	label?: string | null | undefined
}

export function getIntlTimezones() {
	return Intl.supportedValuesOf("timeZone")
}

export function createTimezonezLabelMap<Timezone extends TimezoneType>(
	timezones: Timezone[],
) {
	return new Map(timezones.map((timezone) => [timezone.tzCode, timezone.label]))
}

export function createTimezonesOptions<Timezone extends TimezoneType>(
	timezones: Timezone[],
) {
	const labelMap = createTimezonezLabelMap(timezones)
	const intlTimezones = getIntlTimezones()

	intlTimezones.map((timezone) => ({
		label: labelMap.get(timezone) ?? timezone,
		value: timezone,
	}))
}
