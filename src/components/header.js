'use client';
import Link from "next/link";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import MainDomainLink from '@/components/MainDomainLink';

import ReactSearchBox from "react-search-box";
import { useRouter } from 'next/router';

export default function Header() {

  const router = useRouter();
  const [filterdata, setFilterdata] = useState([]);

  const fetchData = () => {
    Promise.all([
      axios.get("https://admin.scoopcost.com/giftcard-page/alphabetical-filter/?paginate=false"),
      axios.get("https://admin.scoopcost.com/store-search")
    ])
      .then(([giftCardRes, storeRes]) => {
        console.log(giftCardRes)
        const giftCards = (giftCardRes.data || []).map(gift_card => ({
          key: gift_card.slug,
          value: gift_card.store_name,
          is_gift_card: 1
        }));

        const stores = (storeRes.data || []).map(store => ({
          key: store.slug,
          value: store.title,
          is_gift_card: 0
        }));

        setFilterdata([...giftCards, ...stores]);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };



  useEffect(() => {
    const toggler = document.querySelector('.navbar-toggler');
    const collapse = document.querySelector('.navbar-collapse');

    const closeNavbar = (event) => {
      if (collapse?.classList.contains('show')) {
        if (
          event.target !== toggler && // not clicking on toggler
          !collapse.contains(event.target)
        ) {
          // Trigger click to collapse it via Bootstrap JS
          toggler?.click();
        }
      }
    };

    window.addEventListener('scroll', closeNavbar);
    document.addEventListener('click', closeNavbar);

    return () => {
      window.removeEventListener('scroll', closeNavbar);
      document.removeEventListener('click', closeNavbar);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="mobileFlex">
          <button
            className="navbar-toggler order-lg-3"
            type="button"
            aria-label="Click here to toggle navigation"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <MainDomainLink className="navbar-brand brandLogo" href="/">
            Scoop<span>Cost</span>
          </MainDomainLink>
          <div className="dummyBox"></div>
        </div>

        <div className="d-flex ms-auto order-lg-2 searchForm">

          <ReactSearchBox
            placeholder="Search Store"
            value=""
            className="d-flex navbarSearch"
            data={filterdata}
            onFocus={() => fetchData()}
            clearOnSelect={true}
            onSelect={(record) => {
              const { key, is_gift_card } = record.item

              if (is_gift_card) {
                window.location.href = `https://scoopcost.com/gift-card/${key}`
              } else {
                window.location.href = `https://scoopcost.com/${key}`
              }
            }}
            leftIcon={<svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="#2f3c97"
              className="bi bi-search"
              viewBox="0 0 20 20"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>}
          />
          <button class="btn btn-outline-success" type="button">Search</button>

        </div>


        <div className="collapse navbar-collapse justify-content-center order-lg-1" id="navbarNav">
          <ul className="navbar-nav navLinks">
            <li className="nav-item">
              <MainDomainLink className="nav-link" prefetch={false}
                href="/stores">
                Coupons
              </MainDomainLink>
            </li>
            <li className="nav-item">
              <MainDomainLink className="nav-link" href="/gift-card">
                Gift Card
              </MainDomainLink>
            </li>
            <li className="nav-item">
              <MainDomainLink className="nav-link" prefetch={false}

                href="/choose-category">
                Category
              </MainDomainLink>
            </li>
          </ul>
        </div>



      </div>
      <div className="loginBtn">
        <a href="" aria-label="login / sign up" title="login / signup">
          <svg class="svg-inline--fa fa-user g-icon g-icon-md" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"></path>
          </svg>
        </a>
      </div>

    </nav>
  );
}


