import { redirect } from '@sveltejs/kit';

export async function load() {
	// Redirect to the new page
	throw redirect(302, '/');
}
