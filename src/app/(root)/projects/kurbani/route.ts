import { permanentRedirect } from 'next/navigation';

export async function GET() {
    // Permanent redirect to /project/qurbani with status 301
    return permanentRedirect('/project/qurbani');
}
