import * as React from 'react';

function PharmacyCard({ name, reviews, website, hours, phone, location, imageUrl }) {
  return (
    <div className="flex flex-col w-full" style={{ width: '237px' }}> {/* Adjust width here */}
      <img
        loading="lazy"
        src={imageUrl}
        alt={`${name} location`}
        className="object-contain rounded-xl aspect-[3.12] w-full"
      />
      <div className="flex flex-col mt-5 w-full">
        <div className="flex flex-col justify-center px-2 py-2.5 rounded-xl bg-slate-200">
          <div className="flex flex-col">
            <div className="self-start text-base font-semibold tracking-tight leading-none text-center text-neutral-900">
              {name}
            </div>
            <div className="flex flex-col mt-2.5 w-full">
              <div className="flex gap-3.5 items-center self-start">
                <div className="self-stretch my-auto text-base tracking-tight leading-none text-neutral-900">
                  Reviews
                </div>
                <div className="flex gap-1.5 items-center self-stretch my-auto">
                  {[...Array(reviews)].map((_, index) => (
                    <img
                      key={index}
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1aff4cffe82bf3ceb8380d3ecd497561182ca0dc0c9950a263eef508a467f86?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36"
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                    />
                  ))}
                  {[...Array(5 - reviews)].map((_, index) => (
                    <img
                      key={`empty-${index}`}
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/027ff68531dc7395f4d39e1cf8573761617c0604488d232cd26235b59e975770?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36"
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                    />
                  ))}
                </div>
              </div>
              <div className="flex gap-2.5 items-center mt-1 w-full text-base tracking-tight leading-none whitespace-nowrap text-neutral-900">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/653ce0c0564ded0a33fd2129673b30d4c81858da7562ac07adbacd867e545214?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                />
                <div className="self-stretch my-auto">{website}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-5 w-full text-neutral-900">
        <div className="flex flex-col justify-center items-start px-3 py-2.5 rounded-xl bg-slate-200 max-md:pr-5">
          <div className="flex flex-col max-w-full w-[173px]">
            <div className="text-base font-semibold tracking-tight leading-none">
              Opening - Closes Time
            </div>
            <div className="flex flex-col mt-2.5 w-full">
              <div className="flex gap-5 items-center w-full">
                <div className="self-stretch my-auto text-base tracking-tight leading-none">
                  {hours}
                </div>
                <div className="self-stretch my-auto text-xs tracking-tight leading-loose">
                  Mon-Sun
                </div>
              </div>
              <div className="flex gap-2.5 items-center mt-1 w-full text-xs tracking-tight leading-loose">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/006ff249773b8a7afedb7ecb8cd0e5c470e255458a2203cc28a0aa379b0881d0?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[15px]"
                />
                <div className="self-stretch my-auto">{phone}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-5 w-full text-neutral-900">
        <div className="flex flex-col justify-center items-start px-1.5 py-3 rounded-xl bg-slate-200 max-md:pr-5">
          <div className="flex flex-col max-w-full w-[184px]">
            <div className="text-base font-semibold tracking-tight leading-none text-center">
              Full Location
            </div>
            <div className="flex gap-4 items-start mt-2.5 w-full text-xs tracking-tight leading-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/804348fd64ee0d1995980324bc9d2e1f90f8e06584070bd783df647d2203547f?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36"
                alt=""
                className="object-contain shrink-0 w-4 aspect-square"
              />
              <div className="w-[153px]">{location}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PharmacyCard;