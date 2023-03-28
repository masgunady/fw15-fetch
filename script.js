const contUser = document.getElementById('container-user');

const endpoint = 'https://jsonplaceholder.typicode.com/users';
fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
        let html = '';

        data.forEach((user) => {
            html += `<div class=" border-2 rounded-md px-4 py-4 flex gap-2">
                        <div class="w-full h-full flex flex-col gap-2 text-sm">
                        <div class="flex items-start justify-start gap-2">
                            <div class="w-[90px] font-semibold">Name</div>
                            <div class="w-[10px]">:</div>
                            <div class="w-[200px]">${user.name}</div>
                        </div>
                        <div class="flex items-start justify-start gap-2">
                            <div class="w-[90px] font-semibold">Username</div>
                            <div class="w-[10px]">:</div>
                            <div class="w-[200px]">${user.username}</div>
                        </div>
                        <div class="flex items-start justify-start gap-2">
                            <div class="w-[90px] font-semibold">Email</div>
                            <div class="w-[10px]">:</div>
                            <div class="w-[200px]">${user.email}</div>
                        </div>
                        <div class="flex items-start justify-start gap-2">
                            <div class="w-[90px] font-semibold">Address</div>
                            <div class="w-[10px]">:</div>
                            <div class="w-[200px]">
                                <ul>
                                    <li class="flex items-center justify-start gap-2">
                                        <div class="font-semibold">Street</div>
                                        <div>${user.address.street}</div>
                                    </li>
                                    <li class="flex items-center justify-start gap-2">
                                        <div class="font-semibold">Suite</div>
                                        <div>${user.address.suite}</div>
                                    </li>
                                    <li class="flex items-center justify-start gap-2">
                                        <div class="font-semibold">City</div>
                                        <div>${user.address.city}</div>
                                    </li>
                                    <li class="flex items-center justify-start gap-2">
                                        <div class="font-semibold">Zip Code</div>
                                        <div>${user.address.zipcode}</div>
                                    </li>
                                    <li class="flex items-center justify-start gap-2">
                                        <div class="font-semibold">Geo</div>
                                        <div>${user.address.geo.lat} ${user.address.geo.lat}</div>
                                    </li>
                                    
                                </ul>    
                            </div>
                        </div>
                        <div class="flex items-start justify-start gap-2">
                            <div class="w-[90px] font-semibold">Phones</div>
                            <div class="w-[10px]">:</div>
                            <div class="w-[200px]">${user.phone}</div>
                        </div>
                        <div class="flex items-start justify-start gap-2">
                            <div class="w-[90px] font-semibold">Website</div>
                            <div class="w-[10px]">:</div>
                            <div class="w-[200px]">${user.website}</div>
                        </div>
                        <div class="flex items-start justify-start gap-2">
                            <div class="w-[90px] font-semibold">Company</div>
                            <div class="w-[10px]">:</div>
                            <div class="w-[200px]">
                            <ul>
                                <li class="font-semibold">${user.company.name}</li>
                                <li class="text-sm">${user.company.catchPhrase}</li>
                                <li class="text-xs">${user.company.bs}</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>`;

            contUser.innerHTML = html;
        });
    });